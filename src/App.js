import React from "react";
import "./App.css";
import TabNav from "./components/TabNav";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
      <SearchForm />
    </main>
  );
}
