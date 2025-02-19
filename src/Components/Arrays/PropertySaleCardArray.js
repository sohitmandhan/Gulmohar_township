import Villa_1 from '../../Images/Villa_1.jpeg.png'
import Villa_2 from '../../Images/Villa_2.jpeg.png'
import Villa_3 from '../../Images/Villa_3.jpeg.png'
import cardImage_1 from '../../Images/CardImage_1.png'
import cardImage_2 from '../../Images/CardImage_2.png'
import cardImage_3 from '../../Images/CardImage_3.png'

const propertySalesCardArray = [
  {
    id: 1,
    saleTag: "FOR SALE",
    amount: "$15,200,000",
    address: "533 Belle Meade Blvd, Nashville, TN 37205",
    specs: "6 Beds, 9 Baths, 9,408 Sq.Ft.",
    src: Villa_1,
    visibilityFactor: 'x'
  },
  {
    id: 2,
    saleTag: "FOR SALE",
    amount: "$16,200,000",
    address: "534 Belle Meade Blvd, Nashville, TN 37205",
    specs: "5 Beds, 6 Baths, 6,408 Sq.Ft.",
    src: Villa_2,
    visibilityFactor: 'x'
  },
  {
    id: 3,
    saleTag: "FOR SALE",
    amount: "$17,200,000",
    address: "535 Belle Meade Blvd, Nashville, TN 37205",
    specs: "4 Beds, 3 Baths, 3,408 Sq.Ft.",
    src: Villa_3,
    visibilityFactor: 'x'
  },
  {
    id: 4,
    src: cardImage_1,
    saleTag: "Exclusive Listings",
    visibilityFactor: 'y'
  },
  {
    id: 5,
    src: cardImage_2,
    saleTag: "Your Home's Worth",
    visibilityFactor: 'y'
  },
  {
    id: 6,
    src: cardImage_3,
    saleTag: "Market Trends",
    visibilityFactor: 'y'
  },
];

export default propertySalesCardArray;
