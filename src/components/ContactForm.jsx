export default function ContactForm() {
  return (
    <div className="contact-form">
      <form>
        <div className="names">
          <label htmlFor="first-name">First name</label>
          <input type="text" name="first-name" />
        </div>
      </form>
    </div>
  );
}
