export enum ServiceNames {
    AUTH = 'AUTH_SERVICE',
    PRODUCTS = 'PRODUCT_SERVICE',
    ORDERS = 'ORDER_SERVICE',
    NOTIFICATIONS = 'NOTIFICATIONS_SERVICE',
}


export enum EventPatterns {
    ORDER_CREATED = 'order_created',
    PRODUCT_STOCK_UPDATED = 'product_stock_updated',
}

export enum MessagePatterns {
    LOGIN = 'login',
    REGISTER = 'register',
    VALIDATE_USER = 'validate_user',
    GET_PRODUCTS = 'get_products',
    CREATE_PRODUCT = 'create_product',
    CREATE_ORDER = 'create_order',
    SEND_WELCOME_EMAIL = 'send_welcome_email',
    SEND_ORDER_CONFIRMATION = 'send_order_confirmation',
}

