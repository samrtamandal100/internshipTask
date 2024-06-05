const express = require('express');
const router = require("express").Router();
const axios = require('axios');
const app = express();
const path = require('path');


const SHOPIFY_STORE_URL = 'https://messold101.myshopify.com';


// this one is fetch shopify data
const getShopifyProducts = async () => {
  const headers = {
    'X-Shopify-Access-Token': process.env.SHOPIFY_API_ACCESS_TOKEN,
    'Content-Type': 'application/json'
  };
  const url = `${SHOPIFY_STORE_URL}/admin/api/2023-04/products.json`;
  try {
    const response = await axios.get(url, { headers });
    return response.data.products;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return [];
  }
};

// this one render all data
router.get('/', async (req, res) => {
  const products = await getShopifyProducts();
  console.log(products);
  res.render('display', { products });
});

module.exports = router;