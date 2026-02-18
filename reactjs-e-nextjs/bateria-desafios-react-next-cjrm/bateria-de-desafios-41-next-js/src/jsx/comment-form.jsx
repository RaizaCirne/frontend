const CommentForm = ({ title }) =>
  <form className="border border-slate-500 flex flex-col gap-2 mt-3 px-3 py-3 rounded">
    <p className="pb-1">Jogou <strong>{title}</strong>? Dê a sua opinião!</p>
    <div className="flex items-center">
      <label className="shrink-0 flex items-center space-x-2">
        <span className="w-32">Seu nome</span>
        <input name="userField" required className="border px-2 py-1 rounded w-48 ml-2 bg-slate-800" />
      </label>
    </div>
    <div className="flex items-center">
      <label className="shrink-0 flex items-center space-x-2">
        <span className="w-32">Seu comentário</span>
        <textarea name="messageField" required className="border px-2 py-1 rounded w-96 ml-2 bg-slate-800" />
      </label>
    </div>
    <button type="submit" className="bg-indigo-600 rounded px-2 py-1 self-center text-slate-50 w-32 hover:bg-indigo-500">
      Enviar
    </button>
  </form>

export default CommentForm
