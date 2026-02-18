import { MessageSquareText } from 'lucide-react'
// ...
<section className="border-solid border-slate-500 border-t max-w-screen-sm mt-6 py-3">
  <h2 className="font-bold flex gap-2 items-center text-xl">
    <MessageSquareText /> Comentários
  </h2>
  <CommentForm title={title} />
  <CommentList />
</section>
