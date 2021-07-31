export const getCurrentVariant = (currentProduct, GloveFoundationJson) => {
    let currentVariant = { sku: 'kip', price: 235, variant_id: 111 };

    if(currentProduct && currentProduct.variants) {
        const leatherTypeOption = GloveFoundationJson.filter(option => option.name === "leather")[0];
        let sku;
        if(leatherTypeOption.selected === "Emerald Series - Japanese Kip Leather") {
            sku = 'kip';
        } else if(leatherTypeOption.selected === "Peridot Series - US Steerhide Leather") {
            sku = 'steerhide';
        } if(leatherTypeOption.selected === "Topaz Series - Smooth Cowhide Leather") {
            sku = 'cowhide';
        }
        let variant = currentProduct.variants.filter(v => v.sku === sku);
        if(variant.length) {
            currentVariant = variant[0];
        }
    }

    return currentVariant;

}