import toast from "react-hot-toast"
import LayoutSection from "@/components/LayoutSection"

/** @type { import("react").FormEventHandler } */
function handleSubmit(e: any) {
  e.preventDefault()
  const toaster = toast.loading("Sending")
  function toHome() {
    toast.dismiss(toaster)
    toast.success("Successfully sent!")
    setTimeout(() => {
      window.location.href = "/"
    }, 500)
  }
  fetch("https://formspree.io/f/mzbwnwdn", {
    method: "POST",
    body: new FormData(e.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(toHome)
    .catch(toHome)
}

function BetaRequestForm() {
  return (
    <section className="border-y border-zinc-50 py-8">
      <LayoutSection className="lg:flex items-center py-4 lg:py-0">
        <p className="flex-grow text-center lg:text-left text-xl lg:text-lg mb-4">
          Want to join?, Subscribe to beta launch
        </p>
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-4"
        >
          <input
            required
            name="email"
            type="text"
            placeholder="mail@at.xyz"
            className="bg-transparent flex-grow lg:text-lg lg:max-w-xl border border-zinc-200 rounded-full py-4 px-6 placeholder:font-thin placeholder:text-zinc-300 outline-none"
          />
          <button
            type="submit"
            className="py-4 px-8 font-bold bg-black text-white rounded-full"
          >
            SUBMIT
          </button>
        </form>
      </LayoutSection>
    </section>
  )
}

export default BetaRequestForm
