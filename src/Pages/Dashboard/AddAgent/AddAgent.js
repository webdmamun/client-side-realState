import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddAgent = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        Swal.fire({
            title: 'Do you want add this?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              fetch('https://young-anchorage-08482.herokuapp.com/agent',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)              
                        
        })
        .then(reset())
        .then(console.log(data));
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
       
       
      }
    return (
        <div className="">
            <h1>Add agent here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <br />

                <input {...register("location")} placeholder="location"/><br />
                <input {...register("img")} placeholder="Image link" /><br />

                <input {...register("phone")} placeholder="phone" />
                <br />
                <input {...register("mail")} placeholder="mail" />
                <br />
                <input className="submit-btn" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddAgent;