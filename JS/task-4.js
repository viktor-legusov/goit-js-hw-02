function getShippingCost(country) {  
    switch (country) {
        case 'Australia':
             "Shipping to Australia will cost 170 credits";
            break;
        case 'Germany':
            return "Sorry, there is no delivery to your country";
        case 'China':
            return "Shipping to China will cost 100 credits";
        case 'Chile':
            return "Shipping to Chile will cost 250 credits";
        case 'Jamaica':
            return "Shipping to Jamaica will cost 120 credits";
        case 'Sweden':
            return "Sorry, there is no delivery to your country";
    }       
}
getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");