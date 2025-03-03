"use client";

export default function ErrorPage({ error, reset }) {
    return (
      <div className="error-page">
        <h1 className="text-2xl text-red-500">Oops! Something went wrong.</h1>
        <p className="text-lg text-red-400">{error.message}</p>

      </div>
    );
  }
  