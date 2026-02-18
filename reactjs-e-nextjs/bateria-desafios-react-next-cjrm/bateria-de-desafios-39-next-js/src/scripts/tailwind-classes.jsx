// 📂 app/analises/page.jsx
{/* div inserida para conter Pagination e SearchBox */ }
<div className="flex gap-6 py-1">
  <Pagination /* ... */ />
  <SearchBox />
</div>

// 📂 components/search-box.jsx
const SearchBox = () => {
  // ...
  return (
    <A>
      <B className="bg-slate-700 border px-2 rounded" />
      <C className="bg-slate-700 border empty:invisible">
        {blablabla.map(bla =>
          <D className="data-[focus]:bg-slate-500">
            <span className="block px-2 w-full">{bla.blabla}</span>
          </D>
        )}
      </C>
    </A>
  )
}
