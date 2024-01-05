import { Modal, Segmented, Switch } from "antd";

const ModalUI = () => {
  return (
    <div>
      <Modal
        title="Sozlamalar"
        open={false}
        // onOk={handleOk}
        // onCancel={handleCancel}
      >
        <div className="mt-[30px]">
          <Segmented
            block
            size="large"
            options={["O'zbekcha", "English", "Русский"]}
          />
        </div>

        <div className="flex items-center w-full justify-between border-[1px] border-[#C8AC8C] rounded-[10px] px-3 py-2 mt-[30px] mb-[30px]">
          <p className="font-semibold text-[17px]">Dark mode</p>
          <div className="bg-[#F5F5F5] flex items-center justify-center w-fit h-fit rounded-full">
            <Switch
              onChange={() => {
                document.documentElement.classList.toggle("dark");
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalUI;
