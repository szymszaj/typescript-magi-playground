interface ApiResponse<T> {
  status: "success" | "error";
  data?: T;
  error?: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

const productResponse: ApiResponse<Product> = {
  status: "success",
  data: {
    id: "p1",
    name: "Magic Keyboard",
    price: 150,
  },
};

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

const renderButton = (props: ButtonProps) => {
  console.log(`Rendering ${props.variant || "primary"} button: ${props.label}`);
  props.onClick();
};

async function fetchProduct(id: string): Promise<Product> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "Async Product",
        price: 99,
      });
    }, 500);
  });
}

(async () => {
  console.log("API Response:", productResponse);

  renderButton({
    label: "Click Me",
    onClick: () => console.log("Clicked!"),
    variant: "secondary",
  });

  console.log("Fetching product...");
  const product = await fetchProduct("123");
  console.log("Fetched:", product);
})();
