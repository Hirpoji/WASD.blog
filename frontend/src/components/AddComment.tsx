import Button from "./UI/Button";

export default () => {
  return (
    <div className="w-full flex flex-col gap-y-5 mt-5">
      <textarea
        className="border border-gray-300 p-5 rounded-lg"
        placeholder="Написать комментарий"
        rows={3}
      />
      <div className="flex justify-end">
        <Button classes="!bg-black text-white px-4 py-2 rounded-3xl" onclick={()=>{return 0}}>
          Отправить
        </Button>
      </div>
    </div>
  );
};
