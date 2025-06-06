"use client";

import React, { useEffect, useState } from "react";

export default function Dashboard() {


  const [buyItems, setBuyItems] = useState([]);
  const [buyOffers, setBuyOffers] = useState({});
  const [sellItems, setSellItems] = useState([]);
  const [sellPrices, setSellPrices] = useState({});
const [summary, setSummary] = useState({ TotalRevenue: 0, Count: 0 });

useEffect(() => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/Summaries`)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch summaries");
      return res.json();
    })
    .then(data => {
      // Adjust casing if needed (backend might send lowercase keys)
      setSummary({
        TotalRevenue: data.totalRevenue ?? data.TotalRevenue ?? 0,
        Count: data.count ?? data.Count ?? 0,
      });
    })
    .catch(err => {
      console.error(err);
      alert("Error loading summary data");
    });
}, []);
  useEffect(() => {
    fetch("/ss.txt")
      .then((res) => res.text())
      .then((data) => {
        const parsedItems = parseItems(data);
        const combinedItems = combineItems(parsedItems);
        setBuyItems(combinedItems);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/NotSoldItems`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch not sold items");
        return res.json();
      })
      .then((data) => setSellItems(data))
      .catch((err) => {
        console.error(err);
        alert("Error loading not sold items");
      });
  }, []);

  function parseItems(data) {
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = [];
    let match;
    while ((match = itemRegex.exec(data)) !== null) {
      const itemData = match[1];
      const getTagValue = (tag) => {
        const tagRegex = new RegExp(`<${tag}>\\s*([\\s\\S]*?)\\s*</${tag}>`);
        const found = tagRegex.exec(itemData);
        return found ? found[1].trim() : "";
      };
      items.push({
        name: getTagValue("Name"),
        skin: getTagValue("Skin"),
        type: getTagValue("Type"),
        rarity: getTagValue("Rarity"),
        price: parseFloat(getTagValue("Price")),
        marketplace: getTagValue("MarketPlace").replace(/"/g, ""),
      });
    }
    return items;
  }

  function combineItems(items) {
    const map = new Map();

    items.forEach((item) => {
      const key = `${item.name}|${item.skin}|${item.type}|${item.rarity}`;
      if (!map.has(key)) {
        map.set(key, {
          name: item.name,
          skin: item.skin,
          type: item.type,
          rarity: item.rarity,
          csfloat: null,
          csmoney: null,
        });
      }

      const entry = map.get(key);
      if (item.marketplace.toLowerCase().includes("float")) {
        entry.csfloat = item.price;
      } else if (item.marketplace.toLowerCase().includes("money")) {
        entry.csmoney = item.price;
      }
    });

    return Array.from(map.values())
      .filter((item) => item.csfloat !== null && item.csmoney !== null)
      .map((item) => ({
        ...item,
        priceDiff: item.csmoney - item.csfloat,
      }))
      .sort((a, b) => b.priceDiff - a.priceDiff);
  }

  async function handleBuy(idx) {
    const offer = buyOffers[idx];
    if (!offer || offer <= 0) {
      alert("Please enter a valid offer price.");
      return;
    }

    const item = buyItems[idx];

    const payload = {
      Name: item.name,
      Skin: item.skin,
      Type: item.type,
      Rarity: item.rarity,
      CSFloatPrice: item.csfloat,
      CSMoneyPrice: item.csmoney,
      Revenue: item.priceDiff,
      BoughtAtPrice: parseFloat(offer),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/items/BuyItem`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        alert("Item bought successfully!");
        setBuyOffers((prev) => ({ ...prev, [idx]: "" }));
      } else {
        alert("Failed to buy item.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  }

  async function handleSell(idx) {
  const price = sellPrices[idx]?.price;
  const revenue = sellPrices[idx]?.revenue;

  if (!price || price <= 0) {
    alert("Please enter a valid sell price.");
    return;
  }

  const item = sellItems[idx];

  const payload = {
    Id: item.id,
    SoldAtPrice: parseFloat(price),
    Revenue: parseFloat(revenue.toFixed(2)),
    SoldAtDate: new Date().toISOString(), // Optional, but often useful
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/items/SellItem`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (res.ok) {
      alert("Item sold successfully!");
      setSellPrices((prev) => ({ ...prev, [idx]: "" }));
      setSellItems((prev) => prev.filter((_, i) => i !== idx));
    } else {
      alert("Failed to sell item.");
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
}


  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Buy List</h1>
      <table className="table table-bordered table-striped text-center">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Skin</th>
            <th>Type</th>
            <th>Rarity</th>
            <th>CSFloat Price</th>
            <th>CSMoney Price</th>
            <th>Revenue</th>
            <th>Your Offer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buyItems.slice(0, 7).map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.skin}</td>
              <td>{item.type}</td>
              <td>{item.rarity}</td>
              <td>${item.csfloat.toFixed(2)}</td>
              <td>${item.csmoney.toFixed(2)}</td>
              <td className="text-success font-weight-bold">
                ${item.priceDiff.toFixed(2)}
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  className="form-control form-control-sm"
                  required
                  value={buyOffers[idx] || ""}
                  onChange={(e) =>
                    setBuyOffers((prev) => ({ ...prev, [idx]: e.target.value }))
                  }
                  placeholder="Enter offer"
                />
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleBuy(idx)}
                >
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-center my-4">Not Sold Items</h1>
      <table className="table table-bordered table-striped text-center">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Skin</th>
            <th>Type</th>
            <th>Rarity</th>
            <th>CSFloat Price</th>
            <th>CSMoney Price</th>
            <th>Revenue</th>
            <th>BoughtAtPrice</th>
            <th>BoughtAtDate</th>
            <th>Sell Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellItems.slice(0, 7).map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.skin}</td>
              <td>{item.type}</td>
              <td>{item.rarity}</td>
              <td>${item.csFloatPrice?.toFixed(2)}</td>
              <td>${item.csMoneyPrice?.toFixed(2)}</td>
              <td className="text-success font-weight-bold">
  ${(sellPrices[idx]?.revenue || 0).toFixed(2)}
</td>

              <td  className="text-danger">
                {item.boughtAtPrice?.toFixed(2)}
              </td>
              <td  >
                {item.boughtAtDate}
              </td>
              <td>
  <input
    type="number"
    step="0.01"
    min="0"
    className="form-control form-control-sm"
    required
    value={sellPrices[idx]?.price.toFixed(2) || ""}
    onChange={(e) => {
      const inputValue = parseFloat(e.target.value) || 0;
      const revenue = inputValue - (item.boughtAtPrice || 0);
      setSellPrices((prev) => ({
        ...prev,
        [idx]: { price: inputValue, revenue: revenue },
      }));
    }}
    placeholder="Enter sell price"
  />
</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => handleSell(idx)}
                >
                  Sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-5">
  <h2 className="text-center mb-3">Summary</h2>
  <table className="table table-bordered table-striped text-center mx-auto" style={{maxWidth: '400px'}}>
    <thead className="thead-light">
      <tr>
        <th>Count</th>
        <th>Total Revenue</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{summary.Count}</td>
        <td>${summary.TotalRevenue.toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
    
  );
}
