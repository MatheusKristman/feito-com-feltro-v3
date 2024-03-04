import { AdminForm } from "./admin-form";

export const AdminContent = () => {
  return (
    <section className="w-full relative before:content-[''] before:bg-admin-form-left-bubble before:bg-no-repeat before:bg-contain before:bg-left before:w-36 before:h-40 before:absolute before:left-0 before:top-20 after:content-[''] after:bg-admin-form-right-bubble after:bg-no-repeat after:bg-contain after:bg-right after:w-20 after:h-32 after:absolute after:right-0 after:top-0">
      <div className="w-full px-6 relative z-10">
        <div className="w-full my-10 bg-green-secondary p-10 rounded-[60px] flex flex-col items-center">
          <h4 className="lobster-two-font text-3xl text-center text-green-primary mb-9">
            Entre na sua conta
          </h4>

          <AdminForm />
        </div>
      </div>
    </section>
  );
};
