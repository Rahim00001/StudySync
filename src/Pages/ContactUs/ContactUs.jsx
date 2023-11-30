import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
const ContactUs = () => {
    const handleSubmit = () => {
        Swal.fire({
            title: "Message Sent?",
            text: "Thanks for masseging us",
            icon: "success"
        });
    }
    return (
        <div>
            <Helmet>
                <title>StudySync | Contact Us</title>
            </Helmet>
            <p className='text-center text-6xl font-bold mb-5 pt-16'>Our Location</p>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3309627476438!2d90.38113137533547!3d23.735574478680462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c8e1ea9fd1%3A0xa6e274882fdbce53!2z4Kai4Ka-4KaV4Ka-IOCmleCmsuCnh-CmnA!5e0!3m2!1sbn!2sbd!4v1701293988023!5m2!1sbn!2sbd"
                    width="80%"
                    height="450"
                    className='mx-auto rounded-lg border-8 border-indigo-400'
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="flex flex-col w-full items-center justify-center min-h-[500px] px-3">
                <h1 className='mt-24 mb-5 text-4xl font-bold '>Contact With Us</h1>
                <form className="flex max-w-md w-full flex-col gap-4 mb-8 bg-slate-200 p-10 rounded-lg">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name" />
                        </div>
                        <TextInput id="name" type="text" placeholder="your name" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your Email*" />
                        </div>
                        <TextInput id="email" type="email" placeholder='Your email' required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Your message*" />
                        </div>
                        <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                    </div>
                    <Button onClick={handleSubmit} type="submit">Submit</Button>
                </form>

            </div>
        </div>
    );
};

export default ContactUs;