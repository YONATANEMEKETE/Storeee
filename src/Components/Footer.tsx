import Container from './Container';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="mt-12 pt-12 bg-myfooterbg w-full pb-20">
      <Container className="flex flex-col gap-4">
        <div className="flex flex-col min-[1000px]:flex-row gap-y-4 items-start basis-3/4 ">
          <div className="basis-1/3 pl-4 pt-8 min-[1000px]:border-t-2 min-[1000px]:border-white">
            <p className="text-3xl font-logo text-mysecondary font-black ">
              STOREEE
            </p>
          </div>
          <div className="basis-2/3 pl-4  flex items-start justify-center gap-16">
            <div className="space-y-6 min-[1000px]:border-t-2 min-[1000px]:border-white pt-12">
              <p className="text-xl text-mysecondary  font-bold">Use Cases</p>
              <div className="space-y-2 text-lg text-mysecondary  ">
                <p className="cursor-pointer hover:underline">Employer Brand</p>
                <p className="cursor-pointer hover:underline">Internal Comms</p>
                <p className="cursor-pointer hover:underline">Recruitment</p>
                <p className="cursor-pointer hover:underline">Sales</p>
                <p className="cursor-pointer hover:underline">UGC</p>
                <p className="cursor-pointer hover:underline">Testimonials</p>
              </div>
            </div>
            <div className="space-y-6 min-[1000px]:border-t-2 min-[1000px]:border-white pt-12">
              <p className="text-xl text-mysecondary  font-bold">
                How It Works
              </p>
              <div className="space-y-2 text-lg text-mysecondary">
                <p className="cursor-pointer hover:underline">Product</p>
                <p className="cursor-pointer hover:underline">
                  Browser Extension
                </p>
                <p className="cursor-pointer hover:underline">Integration</p>
                <p className="cursor-pointer hover:underline">Developers</p>
                <p className="cursor-pointer hover:underline">Store</p>
              </div>
            </div>
            <div className="space-y-6 min-[1000px]:border-t-2 min-[1000px]:border-white pt-12">
              <p className="text-xl text-mysecondary  font-bold">About</p>
              <div className="space-y-2 text-lg text-mysecondary">
                <p className="cursor-pointer hover:underline">
                  Plan and Pricing
                </p>
                <p className="cursor-pointer hover:underline">Blog</p>
                <p className="cursor-pointer hover:underline">Help Center</p>
                <p className="cursor-pointer hover:underline">
                  Join Slack Community
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 mx-4 min-[1000px]:mx-0 border-t-2 border-white  pt-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <FaFacebook className="text-mysecondary size-6 cursor-pointer" />
            <FaTwitter className="text-mysecondary size-6 cursor-pointer" />
            <FaLinkedin className="text-mysecondary size-6 cursor-pointer" />
            <RiInstagramFill className="text-mysecondary size-6 cursor-pointer" />
          </div>
          <div className="flex items-center gap-4 text-lg">
            <p className="text-mysecondary cursor-pointer hover:underline">
              Terms of Use
            </p>
            <p className="text-mysecondary cursor-pointer hover:underline">
              Privacy Policy
            </p>
            <p className="text-mysecondary cursor-pointer hover:underline">
              Cookies Settings
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
