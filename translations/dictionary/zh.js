import flatten from 'flat';

const header = {
    shop: '购物',
    locations: '搜索分店',
    brands: '旗下品牌',
    contact: '聯絡我們',
    shopping_cart: '購物車',
    language: '語言選擇',
};

const footer = {
    copyright: '2021 Chawisa Lo. All rights reserved. Italian Tomato Redesign Project.',
};

const common = {
    ...flatten({ header: header }), 
    ...flatten({ footer: footer }),

    hello: '你好!',
    welcome: '歡迎!',

    best_selling: '最暢銷',
    size: '尺寸',
    quantity: '數量',
    subtotal: '小計',
    review_order: '查看訂單',
    empty_cart: '您的購物車目前是空的。',
};

const home = {
    ...common,

    hero_title: '蛋糕讓你的生活充滿樂趣',
    hero_description: '意大利番茄保留了最精湛的工藝，融合了誠意和熱情，呈現了過去三十年來最好的手工製品。 準備好讓自己沉浸在高品質食材和美味的純粹快樂中。',
    order_now: '現在下單',

    ordering: '怎麼運行的',
    step_title_1: '第 1 步',
    step_description_1: '從我們的列表中選擇一個蛋糕。',
    step_title_2: '第 2 步',
    step_description_2: '選擇一個日期和商店來取貨。',
    step_title_3: '第 3 步',
    step_description_3: '支付蛋糕費用（通過信用卡）。',
    step_title_4: '第 4 步',
    step_description_4: '在選定的商店取貨。',

    membership: '我們的會員',
    become_member_title: '怎樣成為成員？',
    become_member_answer: '只需下載我們的 Tomato Club Mobile App 並註冊一個帳戶。',
    become_vip_member_title: '如何成為 VIP 會員？',
    become_vip_member_answer: '於60天內於 Italian Tomato 使用 Tomato Club 手機應用程序累計消費 HK$1,000 即可成為 VIP 會員。',
    points_work_title: '會員積分如何運作？',
    points_work_answer: 'HK$ 1 = 1 點\n500 點 = HK$ 10',
    
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
        *Welcome Gift\n
        HK$ 50 Cash coupon x2\n
        HK$ 20 Cash coupon x2\n
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

    all: '一切',
    reset: '重啟',
    error: '沒有找到蛋糕...',

    cream_cake: '忌廉蛋糕',
    cheese_cake: '芝士蛋糕',
    chocolate_cake: '巧克力蛋糕',
    mousse: '摩絲',
    tart: '撻',
};

const product = {
    ...common,

    product_code: '蛋糕編號',
    key_ingredients: '關鍵成分',
    price: '價格',
    birthday_message: '生日留言',
    birthday_message_placeholder: '生日快樂...',
    add_to_cart: '加入購物車',
};

const checkout = {
    ...common,

    product: '產品',
    cost: '成本',
    membership: '會員資格',
    membership_placeholder: '會員編號',
    coupon: '優惠券',
    coupon_placeholder: '優惠碼',
    discount: '折扣',
    total: '全部的',
    
    pickup_arrangement: '取件安排',
    notice_title: '重要通知',
    notice_description: '您可以在 10:00 至 20:00 之間領取蛋糕。 成功處理付款後，您將通過電子郵件收到收據。 領取蛋糕時，請將收據出示給工作人員確認。',
    name: '名稱',
    name_placeholder: '你的名字',
    number: '聯繫電話',
    number_placeholder: '您的聯繫電話',
    email_address: '電子郵件地址',
    email_address_placeholder: '您的電子郵件地址',
    date: '日期',
    date_placeholder: '2021 年 12 月 15 日，星期三',
    time: '時間',
    time_placeholder: '13:00',
    store_location: '店面位置',
    store_location_placeholder: '樂富 UNY 店',
    
    payment: '支付',
    card_name: '持卡人姓名',
    card_name_placeholder: '卡上的名字',
    card_number: '卡號',
    card_number_placeholder: 'xxxx-xxxx-xxxx-xxxx',
    exp: '到期日',
    exp_placeholder: '01/23',
    cvc: 'CVC',
    cvc_placeholder: '123',

    continue_shopping: '繼續購物',
    confirm_order: '確認訂單',
};

const brands = {
    ...common,

    page_title: '我們是一家人',

    italian_tomato: '用注滿真心和熱誠之雙手一個一個做出來之美味蛋糕，充滿了幸福之味道。 進食後之瞬間幸福甜蜜的感覺慢慢浸透出來。 這是因為每個蛋糕都是由西餅師傅用心一個一個地製作出來。 用料方面選用各國優質材料，加上秘製配方，這是 Italian Tomato 蛋糕大人氣之小秘密。 以美國風呎吋的特色來表現出來，請各顧客親身一試吧!',
    tomato_cafe: '帶給你充滿歐陸風格的美食體驗，選用木材、石頭等天然素材作為設計主題，其溫暖的色調令整個餐廳充滿著歐陸風格，絕對是品嚐輕食和休閒美食的地方。 在如此完美的環境下，我們為你提供各款意大利料理，例如意粉、沙律、薄餅和焗飯等主菜，加上一杯自家製作的咖啡，令你滿足口腹之樂。',
    cafe_grill: '餐廳以黑白及啡木色為設計主調，加上別具風格的家具及掛畫，讓客人於簡約 時尚的環境下用膳。 質感細滑的新鮮意粉，比一般乾意粉煙韌彈牙。 嚴選各國 優質食材入饌，配以充滿意式味道的秘製意粉，締造出濃厚的意式滋味。',
    fari_beurre: '日本東京車站大人氣品牌 Fari Beurre 撻及鹹批專門店，提供多種口味的鮮果撻 Tarts 及法式鹹批 Quiche。 沿用 Italian Tomato 享負盛名的蛋糕系列設計出各款鮮果撻，是忠於原粹美味的延續。 其中以 Gâteau aux fraises 最為經典，是 Fari Beurre 的招牌鮮果撻，內層以鬆軟海綿蛋糕夾上士多啤梨，外層人手特製鮮忌廉加士多啤梨作裝飾，烘焙出 Fari Beurre 皇牌撻之一。 另一款必試的招牌芝士撻，香滑流心芝士，令人一吃愛上。',
    wasabou: '享受日本抹茶與和式甜點間的美味結合。 日式茶屋，是抹茶與和式甜點的藝術交融之地，也是都市寧靜的一隅，給予人們一片空間去享受悠閒時光。 遠離喧囂，讓你再次看到夢想，這裡就是「夢見屋。 選用優質食材製作出美味的和式甜點及食物，配合傳統與日式時尚設計，給你一個忙裏偷閒﹑放鬆心情享受美食的私人空間。',
};

const locations = {
    ...common,

    page_title: '尋找離您最近的商店',
    none: '沒有任何',

    kowloon: '九龍',
    new_territories: '新界及離島',
    hk_island: '香港島',
};

const contact = {
    ...common,

    page_title: '與我們交談',

    ordering_title: '訂購服務查詢',
    ordering_note: '僅供查詢',

    customer_title: '客戶服務部',

    notice_title: '重要通知',
    notice_message: '兩條熱線服務於星期六、日及公眾假期關閉。',
};

const dummy = {
    ...common,
};

export const zh = {
    '/': home,
    '/shop': shop,
    '/product': product,
    '/checkout': checkout,
    '/our-brands': brands,
    '/locations': locations,
    '/contact-us': contact,
    '/dummy': dummy,
};
