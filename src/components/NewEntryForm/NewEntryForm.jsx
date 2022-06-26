import { useState } from 'react';

export default function NewEntryForm() {

    const [formInputs, setFormInputs] = useState({
        title: "",
        date: "",
        netWorth: "",
    })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt.target[0].value);
        console.log(evt.target[1].value);
        console.log(evt.target[2].value);
        // add entry to database
        // reset inputs
        setFormInputs({
            title: "",
            date: "",
            netWorth: "",
        })
    }

    return (
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="title-input-container">
                    <label>Title</label>
                    <input type="text" name="title" value={formInputs.title} onChange={(e) => setFormInputs({ title: e.target.value })} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" name="date" value={formInputs.date} onChange={(e) => setFormInputs({ date: e.target.value })}/>
                </div>
                <div>
                    <label>Net worth</label>
                    <input type="number" name="netWorth" step="10" value={formInputs.netWorth} onChange={(e) => setFormInputs({ netWorth: e.target.value })}/>
                </div>
                <button type="submit" >Add Entry</button>
            </form>
        </div>
    )
}