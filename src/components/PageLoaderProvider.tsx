"use client";
import React, { createContext, useContext } from "react";

const LoaderContext = createContext({ loading: false });

export function useLoader() {
  return useContext(LoaderContext);
}

export function PageLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Temporarily disable all loading to test
  const loading = false;

  return (
    <LoaderContext.Provider value={{ loading }}>
      {children}
    </LoaderContext.Provider>
  );
}
