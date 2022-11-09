import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const navigete = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigete(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <div>
        <Link to="/" className="flex items-center">
          <BsYoutube className="text-4xl text-brand" />
          <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
        </Link>
      </div>
      <form
        className="w-full flex justify-center text-gray-50"
        onSubmit={handleSubmit}
      >
        <input
          className="w-7/12 p-2 outline-none bg-black "
          type="text"
          placeholder="search.."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </form>
      <button className="bg-zinc-600 px-4">
        <BsSearch />
      </button>
    </header>
  );
}
