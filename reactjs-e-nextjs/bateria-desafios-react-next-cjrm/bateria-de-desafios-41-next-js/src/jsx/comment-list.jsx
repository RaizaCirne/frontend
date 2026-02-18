import { UserRound } from 'lucide-react'

const comments = [
  { id: '1', user: 'Joaquina', message: 'Adoro esse jogo!' },
  { id: '2', user: 'Roberto', message: 'É ok, mas não é do gênero que curto.' },
  { id: '3', user: 'Joaquim', message: 'Não consigo parar de jogar!' }
]

const CommentList = () =>
  <ul className="mt-3">
    {comments.map(comment => (
      <li key={comment.id} className="border-b border-slate-500 px-3 py-2 last:border-none odd:bg-slate-700">
        <div className="flex gap-3 pb-1 text-slate-400">
          <UserRound /> {comment.user}
        </div>
        <p className="italic">{comment.message}</p>
      </li>
    ))}
  </ul>

export default CommentList
