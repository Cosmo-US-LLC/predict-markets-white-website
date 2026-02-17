// import tokenDetailsImage from "../assets/images/home/token_details/token_details_image.webp";

export const tokenDetailsCards = [
  { id: "symbol", label: "Token Symbol", value: "PREDICT" },
  { id: "launch", label: "Launch on", value: "Uniswap and CEX" },
  { id: "type", label: "Token Type", value: "Ethereum ERC - 20" },
  { id: "supply", label: "Total Supply", value: "2,500,000,000" },
  { id: "decimal", label: "Decimal", value: "18" },
  {
    id: "presale",
    label: "Presale allocation",
    value: "1,000,000,000 $PREDICT tokens will be sold during the presale",
  },
  {
    id: "contract",
    label: "Token Contract Address",
    value: "0xE44cFB653b610Bf2af47D9D25fD60C2f35adD816",
    valueForMobile: "0xE44cFB653b...D816",
    copyable: true,
  },
];

export const tokenDetailsConfig = {
  title: "Token Details",
  subtitle:
    "The token allocation is structured to give early supporters the strongest advantage.",
  // chartImage: tokenDetailsImage,
};
