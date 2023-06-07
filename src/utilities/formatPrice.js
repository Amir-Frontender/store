const PRICE_FORMATER = new Intl.NumberFormat(undefined, {
    currency: "UZS",
    // currencyDisplay: "code",
    minimumFractionDigits: 0,
    style: "currency"
})

export function formatPrice(price) {
    return PRICE_FORMATER.format(price)
}