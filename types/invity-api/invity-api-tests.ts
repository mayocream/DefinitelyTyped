import {
    BuyProviderInfo,
    BuyTrade,
    CryptoId,
    ExchangeProviderInfo,
    ExchangeTrade,
    InfoResponse,
    SellFiatTrade,
    SellProviderInfo,
    WatchSellTradeResponse,
} from "invity-api";

const bt: BuyTrade = {
    paymentMethodName: "TestPay",
    tags: ["noExternalAddress"],
};

const et: ExchangeTrade = {
    send: "bitcoin" as CryptoId,
    receive: "ethereum" as CryptoId,
    quoteId: "123",
    signData: {
        type: "eip712-typed-data",
        data: {},
    },
    status: "SIGN_DATA",
};

const sft: SellFiatTrade = {
    paymentMethodName: "Test",
    destinationPaymentExtraIdDescription: {
        description: "",
        name: "",
        required: true,
        type: "number",
    },
};

const wstr: WatchSellTradeResponse = {
    cryptoStringAmount: "",
};

const providerInfo: BuyProviderInfo = {
    companyName: "Invity",
    brandName: "UAB Invity Finance",
    isActive: true,
    logo: "logo.svg",
    name: "invity",
    tradedCoins: [],
    tradedFiatCurrencies: [],
    supportedCountries: [],
    paymentMethods: [],
};

const infoResponse: InfoResponse = {
    platforms: {
        ethereum: {
            id: "ethereum",
            name: "Ethereum",
            nativeCoinSymbol: "eth",
        },
    },
    coins: {
        bitcoin: {
            name: "",
            symbol: "",
            coingeckoId: "",
            services: {
                buy: true,
                sell: true,
                exchange: true,
            },
        },
    },
};

const exchangeProviderInfo: ExchangeProviderInfo = {
    name: "example",
    companyName: "Example",
    logo: "example-icon.jpg",
    isActive: true,
    isFixedRate: false,
    isDex: true,
    buyTickers: ["bitcoin", "ethereum"] as CryptoId[],
    sellTickers: ["bitcoin", "ethereum"] as CryptoId[],
    addressFormats: {
        format: "legacy",
    },
    statusUrl: "https://example.com/txs/{{orderId}}",
    kycUrl: "https://example.com/faq#kyc",
    supportUrl: " https://support.example.com",
    kycPolicy: "KYC is required...",
    kycPolicyType: "KYC-norefund",
    isRefundRequired: false,
};

const sellProviderInfo: SellProviderInfo = {
    name: "example",
    companyName: "Example",
    logo: "example-icon.jpg",
    type: "Fiat",
    isActive: true,
    tradedCoins: ["bitcoin", "ethereum"] as CryptoId[],
    tradedFiatCurrencies: ["USD"],
    supportedCountries: ["US"],
    statusUrl: "https://example.com/txs/{{orderId}}",
    supportUrl: " https://support.example.com",
    flow: "PAYMENT_GATE",
    isRefundAddressRequired: false,
    lockSendAmount: false,
};
