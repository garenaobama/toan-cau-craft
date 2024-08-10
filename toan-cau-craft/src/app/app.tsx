import { MainLayout } from "@/components";
import { Home } from "@/screens";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useRef, useState } from "react";
export default function App() {
  const exploreProgress = useAppSelector((state) => state.app.exploreProgress);
  const dispatch = useAppDispatch();

  return (
    <MainLayout>
      <Home></Home>
    </MainLayout>
  );
}
