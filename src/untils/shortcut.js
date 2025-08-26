import { jwtDecode } from "jwt-decode";

export const formatPhone = (e) => {
    let data = e?.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, "$1-$2-$3");
    return data;
};

export const formatIdcard = (e) => {
    let data = e?.slice(0, 1) + "-" + e.slice(1, 5) + "-" + e.slice(5, 10) + "-" + e.slice(10, 12) + "-" + e.slice(12, 13);
    return data;
};

export const tofieds = (num, defaultvalue, maxDigits) => {
    if (isNaN(num)) {
        return defaultvalue ?? 0;
    }
    return Number(num)?.toLocaleString(undefined, {
        minimumFractionDigits: maxDigits ?? 2,
        maximumFractionDigits: maxDigits ?? 2,
    });
};

export const add = (key) => {
    return (a, b) => {
        let d = Number(b[key]) ? Number(b[key]) : b[key] ? Number(b[key].replace(/,/g, "")) : 0;
        return a + d;
    };
};

export const fixAmount = (num) =>
    Number(num)?.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

export const getToken = (item) => {
    let decode = item && item.length > 0 ? jwtDecode(item, "nhdh-api") : null;
    return decode;
};

export const abbreviateNumber = (value) => {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b", "t"];
        var suffixNum = Math.floor(("" + value).length / 3);
        var shortValue = "";
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
            if (dotLessShortValue.length <= 2) {
                break;
            }
        }
        if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
};

export const formatNumber = () => {
    return (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
};

// Number(num)?.toLocaleString(undefined, {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
// });
