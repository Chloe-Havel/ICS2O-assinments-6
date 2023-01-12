// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-assinments-6/sw.js", {
    scope: "/ICS2O-assinments-6/",
  })
}

const quote = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById("dog").innerHTML =
    '<h4> dogs:0: </h4> <img src="' + data.message + '" alt="dog" />'
  } catch (error) {
    console.log(error)
  }
}

quote(
  "https://dog.ceo/api/breeds/image/random"
)

