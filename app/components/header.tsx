export default function PlayTimeHeader() {
  return (
    <header className="grid grid-cols-3 items-center py-4">
      <h1 className="col-start-2 text-2xl font-bold text-center text-mint-green-200">PlayTime</h1>
      <div className="flex justify-end space-x-4">
        <button className="primary-btn">Log In</button>
        <button className="secondary-btn">Sign Up</button>
      </div>
    </header>
  )
}
