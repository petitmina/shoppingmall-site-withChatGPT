// cartLocalStorage.js

// 카트 목록을 로컬 스토리지에 저장하는 함수
export const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  // 카트 목록을 로컬 스토리지에서 가져오는 함수
  export const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  };
  
  // 카트 목록을 업데이트하고 로컬 스토리지에 저장하는 함수
  export const updateCart = (newCartItem) => {
    const cartItems = loadCartFromLocalStorage();
    // 새로운 아이템을 카트 목록에 추가하거나 기존 아이템 업데이트 로직
    // 예: cartItems.push(newCartItem);
    saveCartToLocalStorage(cartItems);
  };
  
  // 카트 목록 초기화
  export const clearCart = () => {
    localStorage.removeItem('cartItems');
  };
  