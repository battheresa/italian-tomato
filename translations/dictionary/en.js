import flatten from 'flat';

const header = {
    shop: 'Shop',
    locations: 'Locations',
    brands: 'Our Brands',
    contact: 'Contact Us',
    shopping_cart: 'Shopping Cart',
    language: 'Language',
};

const footer = {
    copyright: '2021 Chawisa Lo. All rights reserved. Italian Tomato Redesign Project.',
};

const common = {
    ...flatten({ header: header }), 
    ...flatten({ footer: footer }),

    hello: 'Hello!',
    welcome: 'Welcome!',

    best_selling: 'Best Selling',
    size: 'Size',
    quantity: 'Quantity',
    subtotal: 'Subtotal',
    review_order: 'Review Order',
    empty_cart: 'Your cart is currently empty.',
    continue_shopping: 'Continue Shopping',
    please_select: '--- Please select ---',
};

const home = {
    ...common,

    hero_title: 'Cake Delights Your Life',
    hero_description: 'Italian Tomato preserves the most exquisite craftsmanship mixed with sincerity and passion to present the finest handmade products ever the past three decades. Ready to indulge yourself into pure joyfulness with high-quality ingredients and palatableness.',
    order_now: 'Order Now',

    ordering: 'How it Works',
    step_title_1: 'Step 1',
    step_description_1: 'Choose a cake from our listing.',
    step_title_2: 'Step 2',
    step_description_2: 'Select a date and store for pick up.',
    step_title_3: 'Step 3',
    step_description_3: 'Pay for your cake (via credit card).',
    step_title_4: 'Step 4',
    step_description_4: 'Pick up at the selected store.',

    membership: 'Our Membership',
    become_member_title: 'How to become a member?',
    become_member_answer: 'By simply download our Tomato Club Mobile App and register an account.',
    become_vip_member_title: 'How to become a VIP member?',
    become_vip_member_answer: 'You can become a VIP member by spending HK$1,000 cumulatively with the Tomato Club Mobile App at Italian Tomato within 60 days.',
    points_work_title: 'How does membership points works?',
    points_work_answer: 'HK$ 1 = 1 Point\n500 Points = HK$ 10',

    membership_basic_title: 'Basic Member',
    basic_offer: `
        *Welcome Gift\n
        HK$ 10 Cake Coupon x1\n
        HK$ 20 Cake Coupon x1\n
        Free Snack Coupon x1\n
        Free Soup Coupon x1\n 
    `,
    membership_vip_title: 'VIP Member',
    vip_offer: `
        *10% off Year-round\n
        *Welcome Gift\n
        HK$ 50 Cash Coupon x2\n
        HK$ 20 Cash Coupon x2\n
        *Italian Tomato Restaurants\n
        15% off Restaurants Coupon x1\n
        HK$ 50 Restaurant Coupon x2\n
        Free Upgrade Set x1\n
        *Italian Tomato Cake\n
        HK$ 20 Cake Coupon x3\n
        HK$ 10 Cake Coupon x5\n
        *Fari-beurre\n
        Free Bake Cheese Tart Coupon\n
        20% off on Birthday Cake\n
        5% off on the 28th of every month
    `,
};

const shop = {
    ...common,

    all: 'All',
    reset: 'Reset',
    error: 'No Cakes Found...',

    cream_cake: 'Cream Cake',
    cheese_cake: 'Cheesecake',
    chocolate_cake: 'Chocolate Cake',
    mousse: 'Mousse',
    tart: 'Tart',
};

const product = {
    ...common,

    product_code: 'Product Code',
    key_ingredients: 'Key Ingredients',
    price: 'Price',
    birthday_message: 'Birthday Message',
    birthday_message_placeholder: 'Happy Birthday...',
    add_to_cart: 'Add to Cart',
};

const checkout = {
    ...common,

    product: 'Product',
    cost: 'Cost',
    membership: 'Membership',
    membership_placeholder: 'Membership ID',
    coupon: 'Coupon',
    coupon_placeholder: 'Discount Code',
    discount: 'Discount',
    total: 'Total',
    
    pickup_arrangement: 'Pickup Arrangement',
    notice_title: 'Important',
    notice_message: 'You can pick up your cake from 10:00 ??? 20:00. After the payment has been processed successfully, you will receive a receipt at your email. When picking up your cake, please show the receipt to the staff for confirmation.',
    name: 'Name',
    name_placeholder: 'Your name',
    contact: 'Contact',
    contact_placeholder: 'Your contact number',
    email: 'Email',
    email_placeholder: 'Your email address',
    date: 'Date',
    time: 'Time',
    store: 'Store',
    
    payment: 'Payment',
    card_name: 'Cardholder Name',
    card_name_placeholder: 'Cardholder Name',
    card_number: 'Card Number',
    card_number_placeholder: 'xxxx-xxxx-xxxx-xxxx',
    exp: 'Exp',
    exp_placeholder: '01/23',
    cvc: 'CVC',
    cvc_placeholder: '123',

    place_order: 'Place Order',

    order_comfirmation_title: 'Your order has been placed!',
    order_comfirmation_number: 'Order number',
    back_to_home: 'Back to Home Page',
};

const brands = {
    ...common,

    page_title: 'We are a family',

    italian_tomato: 'The feeling of love and sweetness in every single cake transmitted from the chef???s hands and devotion permeates your palate. Sourcing the finest ingredients over the world with the secret receipt makes the Italian Tomato desserts the most ???Eyebrow raising??? menu. Do not miss out on the American Supersized version!',
    tomato_cafe: 'Italian Tomato Caf?? is proud to feature the great Italian pasta, pizza and a choice of entr??e, ciabatta and doria, with the authentic Italian dining experience. Delighting the gourmet taste bud with a simple pleasure, our chefs are obsessed with making every unique culinary creation from the finest ingredients, Italian Tomato also serves blended coffee and homemade desserts.',
    cafe_grill: 'Decor with stylish photo flame wall and wooden furniture. We offer diners a casual dining spot set in designed surroundings. We offer fresh pasta with a tender and silky-smooth texture, which is so more al dente than dried pasta. Well-selected quality ingredients all around the world, creating secret sauces that bring the taste of authentic Italian alive.',
    fari_beurre: 'Fari Beurre, the favourite tart and savoury pie store from Tokyo Station, Japan is about to breeze through Hong Kong with its varying flavours of fruit tart ??? Tarts and French savoury pastry Quiche. Using the best-known cake collection of Italian Tomato, Fari Beurre designed various tastes of fruit tarts-TARTS, simply just the continuation of authentic delicacy.',
    wasabou: 'The art of pairing matcha with Japanese desserts translates the delicate aesthetic of Japanese tradition, this becomes Yumemiya ??? ???The dreamed teahouse??? ??? a place of city???s retreat that features the finest Japanese desserts and fresh gourmet matcha. Traditionally done up in Japanese tones within, the warm atmosphere truly gives you a private and relaxed experience.',
};

const locations = {
    ...common,

    page_title: 'Find your nearest shop',
    none: 'None',

    kowloon: 'Kowloon',
    new_territories: 'New Territories',
    hk_island: 'Hong Kong Island',
};

const contact = {
    ...common,

    page_title: 'Talk to us',

    ordering_title: 'Online Ordering Hotline',
    ordering_note: 'For enquiries only',

    customer_title: 'Customer Service Hotline',

    notice_title: 'Important',
    notice_message: 'Both hotline services are closed on Saturday, Sundays, and Public Holidays.',
};

const dummy = {
    ...common,
};

export const en = {
    '/': home,
    '/shop': shop,
    '/product': product,
    '/checkout': checkout,
    '/our-brands': brands,
    '/locations': locations,
    '/contact-us': contact,
    '/dummy': dummy,
};
