import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
  } from "@nextui-org/react";
  import React from "react";
  
  type CommonModalProps = {
    onClose: () => void;
    isOpen: boolean;
    onOpen: () => void;
    onPossitive?: () => void;
    onOpenChange: () => void;
    children?: React.ReactNode;
  };
  
  export default function ModalCommon({
    isOpen,
    onPossitive,
    onOpenChange,
    onClose,
    children,
  }: CommonModalProps) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent className="overflow-visible">
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col items-center">{children}</div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  variant="bordered"
                  onPress={onPossitive && onPossitive}
                >
                  Okay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  }