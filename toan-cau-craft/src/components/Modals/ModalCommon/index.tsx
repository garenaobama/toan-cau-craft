import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import React from "react";

type CommonModalProps = {
  onCloseModal?: () => void;
  onPossitive?: () => void;
  disclosure: DisclosureProp;
  children?: React.ReactNode;
};

type DisclosureProp = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
  isControlled: boolean;
  getButtonProps: (props?: unknown) => unknown;
  getDisclosureProps: (props?: unknown) => unknown;
};

export default function ModalCommon({
  onCloseModal,
  children,
  disclosure,
}: CommonModalProps) {
  return (
    <Modal
      isOpen={disclosure.isOpen}
      onClose={onCloseModal && onCloseModal}
      onOpenChange={disclosure.onOpenChange}
      placement="top-center"
    >
      <ModalContent className="overflow-visible">
        {() => (
          <>
            <ModalBody>
              <div className="flex flex-col items-center">{children}</div>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
