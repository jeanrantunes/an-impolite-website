"use client";

import { useEffect } from "react";
import { Card, CardActions } from "../components/Card";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Card>
      <>
        <h4>Something went wrong!</h4>
        <CardActions>
          <button onClick={() => reset()}>Reset error boundary</button>
        </CardActions>
      </>
    </Card>
  );
}
