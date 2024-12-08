import axios from "axios";
import axiosInstanceDextools from "./axiosDextools";

// curl -X GET "https://public-api.dextools.io/trial/v2/blockchain?sort=name&order=asc&page=0&pageSize=10" \
//  -H "accept: application/json"\
//  -H "x-api-key: cLobf4KI8U2zWZbkecXsr88APaXZTGSc9jOBjbIQ" \

export const getBlockChain = async (page = 0, pageSize = 10) => {
  const currentPage = page == 1 ? 0 : page;
  const url = `blockchain?sort=name&order=asc&page=${currentPage}&pageSize=${pageSize}`;
  try {
    const response = await axiosInstanceDextools.get(url);
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPoolChain = async (
  chain = "ether",
  sort = "creationTime",
  order = 0,
  from,
  to,
  page = 0,
  pageSize = 10
) => {
  const d = new Date();
  const d2 = new Date(new Date().setMonth(new Date().getMonth() - 3));
  const fromDateTime = d2.toISOString();
  const toDateTime = d.toISOString();

  const url = `/pool/${chain}?sort=${sort}&order=${order}&from=${fromDateTime}&to=${toDateTime}&page=${page}&pageSize=${pageSize}`;
  try {
    const response = await axiosInstanceDextools.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getGainersChain = async (chain = "ether") => {
  const url = `ranking/${chain}/gainers`;

  try {
    const response = await axiosInstanceDextools.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getHotpoolsChain = async (chain = "ether") => {
  const url = `ranking/${chain}/hotpools`;
  try {
    const response = await axiosInstanceDextools.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getLosersChain = async (chain = "ether") => {
  const url = `ranking/${chain}/losers`;
  try {
    const response = await axiosInstanceDextools.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getTokenChainAddress = async (chain = "ether", token = "") => {
  const url = `token/${chain}/${token}`;
  try {
    const response = await axiosInstanceDextools.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
