
type ErrorMessageProps = {
    children: React.ReactNode;
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <p className="text-red-600 p-1 uppercase text-sm font-bold text-center">{children}</p>
  )
}
