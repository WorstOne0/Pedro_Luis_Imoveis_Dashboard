// Next
import { useState, useEffect } from "react";

export interface WithHydrationProps {}

export default function withAuth<T extends WithHydrationProps = WithHydrationProps>(Component: React.ComponentType<T>) {
  const ComponentWithHydration = (props: Omit<T, keyof WithHydrationProps>) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      console.log("Hydration");
      setIsClient(true);
    }, []);

    return <>{isClient && <Component {...props} />}</>;
  };

  return ComponentWithHydration;
}
