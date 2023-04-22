export default function AddOwnerForm() {

    function handleFormSubmit(event) {
        event.preventDefault();
    }

    return <div className="add-form">
        <form id="owner-form" onSubmit={handleFormSubmit}>
            <input className="input input-width--xl" placeholder="Pet Owner Name" type="text" name="owner-name" id="owner-name-input" />
            <input className="input input-width--xl" placeholder="example@email.com" type="email" name="owner-email" id="owner-email-input" />
            <button className="button" type="submit">Add owner</button>
        </form>
    </div>;
}