"use client";

import React, { useState, useRef, useEffect } from "react";
import moment from "moment";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [friendInputs, setFriendInputs] = useState([]);
  const [paidByFriend, setPaidByFriend] = useState(0);
  const contentRef = useRef(null);

  // Function to toggle custom scrollbar visibility
  const toggleScrollbar = () => {
    if (contentRef.current) {
      const hasScrollbar =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      contentRef.current.style.overflowY = hasScrollbar ? "scroll" : "hidden";
    }
  };

  // Effect to toggle scrollbar visibility when the component mounts and when expenses change
  useEffect(() => {
    toggleScrollbar();
  }, [expenses]);

  // Function to add an expense
  const addExpense = () => {
    if (expenseName !== "" && billAmount > 0) {
      const newExpense = {
        name: expenseName,
        billAmount: parseFloat(billAmount),
        friends: [],
        paidByFriend: parseFloat(paidByFriend),
        dateTime: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      setExpenses([...expenses, newExpense]);
      setExpenseName("");
      setBillAmount("");
      setFriendInputs([...friendInputs, ""]);
      setPaidByFriend(0);
    } else {
      console.log("Please enter expense name and bill amount");
    }
  };

  // Function to add a friend to an expense
  const addFriendToExpense = (index) => {
    const updatedFriendName = friendInputs[index];
    if (updatedFriendName !== "") {
      const updatedExpenses = [...expenses];
      updatedExpenses[index].friends.push({
        name: updatedFriendName,
        checked: false,
      });
      setExpenses(updatedExpenses);
      const updatedFriendInputs = [...friendInputs];
      updatedFriendInputs[index] = "";
      setFriendInputs(updatedFriendInputs);
      setPaidByFriend(updatedFriendName);
    } else {
      console.log("Please enter a friend's name");
    }
  };

  // Function to toggle friend's checked status
  const toggleFriendChecked = (expenseIndex, friendIndex) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[expenseIndex].friends[friendIndex].checked =
      !updatedExpenses[expenseIndex].friends[friendIndex].checked;
    setExpenses(updatedExpenses);
  };

  // Function to calculate bill per head
  const calculateBillPerHead = (expense) => {
    const totalFriends = expense.friends.length;
    if (totalFriends > 0 && expense.billAmount > 0) {
      return expense.billAmount / totalFriends;
    } else {
      return 0;
    }
  };

  // Function to calculate owed amount
  const calculateOwedAmount = (expense) => {
    const totalBillAmount = expense.billAmount;
    const totalFriends = expense.friends.length;
    const perHead = calculateBillPerHead(expense);
    const checkedFriends = expense.friends.filter((friend) => friend.checked);
    const totalCheckedFriends = checkedFriends.length;
    const amountPaidByFriends = totalCheckedFriends * perHead;
    const remainingBillAmount = totalBillAmount - amountPaidByFriends;
    return remainingBillAmount;
  };

  // Function to calculate total bill amount
  const calculateTotalBillAmount = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.billAmount;
    });
    return total;
  };

  // Function to calculate total paid amount
  const calculateTotalPaidAmount = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.billAmount - calculateOwedAmount(expense);
    });
    return total;
  };

  // Function to calculate total owed amount
  const calculateTotalOwedAmount = () => {
    return calculateTotalBillAmount() - calculateTotalPaidAmount();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className="flex-none w-full md:w-1/5 bg-gray-800 p-4">
        <h2 className="text-xl font-semibold mb-4">Expense Tracker</h2>
        <input
          type="text"
          value={expenseName}
          className="border p-2 rounded-lg w-full mb-2 bg-gray-700 text-white"
          placeholder="Enter expense name"
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          value={billAmount}
          className="border p-2 rounded-lg w-full mb-2 bg-gray-700 text-white"
          placeholder="Enter bill amount"
          onChange={(e) => setBillAmount(parseFloat(e.target.value))}
        />
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          onClick={addExpense}>
          Add Expense
        </button>
      </div>

      {/* Middle Section */}
      <div className="flex-grow bg-gray-900 p-4 flex flex-wrap justify-center md:justify-start">
        {expenses.map((expense, expenseIndex) => (
          <div
            key={expenseIndex}
            className="bg-gray-800 rounded-lg shadow-xl p-8 mb-4 md:mr-4 md:last:mr-0">
            <h2 className="text-xl font-semibold mb-4">{expense.name}</h2>
            <div className="mb-4">
              <p className="text-gray-400 text-sm mb-2">{expense.dateTime}</p>
              <input
                type="text"
                value={friendInputs[expenseIndex]}
                className="border p-2 rounded-lg w-full bg-gray-700 text-white"
                placeholder="Enter friend's name"
                onChange={(e) => {
                  const updatedFriendInputs = [...friendInputs];
                  updatedFriendInputs[expenseIndex] = e.target.value;
                  setFriendInputs(updatedFriendInputs);
                }}
              />
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
              onClick={() => addFriendToExpense(expenseIndex)}>
              Add Friend
            </button>
            <div className="mt-4">
              <h3>Friends:</h3>
              <ul>
                {expense.friends.map((friend, friendIndex) => (
                  <li
                    key={friendIndex}
                    className="flex items-center justify-between border-b py-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={friend.checked}
                        onChange={() =>
                          toggleFriendChecked(expenseIndex, friendIndex)
                        }
                        className="mr-2"
                      />
                      <span className={friend.checked ? "line-through" : ""}>
                        {friend.name}
                      </span>
                    </div>
                    <span>Bill: {calculateBillPerHead(expense)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3>Total Bill Amount: {expense.billAmount}</h3>
              <h3>Total Owed Amount: {calculateOwedAmount(expense)}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="flex-none w-full md:w-1/5 bg-gray-800 p-4">
        <div className="bg-gray-700 rounded-lg shadow-xl p-4 mb-2 md:mb-4">
          <h2 className="text-xl font-semibold mb-2 md:mb-4">
            Total Bill Amount
          </h2>
          <h3 className="text-lg text-white">{calculateTotalBillAmount()}</h3>
        </div>
        <div className="bg-gray-700 rounded-lg shadow-xl p-4 mb-2 md:mb-4">
          <h2 className="text-xl font-semibold mb-2 md:mb-4">
            Total Paid Amount
          </h2>
          <h3 className="text-lg text-white">{calculateTotalPaidAmount()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Expense;
