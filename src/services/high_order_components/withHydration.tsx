// Next
import { useState, useEffect } from "react";

export interface WithHydrationProps {}

export default function withHydration<T extends WithHydrationProps = WithHydrationProps>(Component: React.ComponentType<T>) {
  const ComponentWithHydration = (props: Omit<T, keyof WithHydrationProps>) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) {
      // Or a loading indicator
      return null;
    }

    return <Component {...props} />;
  };

  return ComponentWithHydration;
}
