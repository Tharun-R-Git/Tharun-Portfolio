import React from 'react';
import { Modal, ModalTrigger, ModalBody, ModalContent } from './ui/AnimatedModal'; // Adjust the import path
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code'; // LeetCode icon placeholder

const ConnectWithMeBox: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-5">
      <ModalTrigger>
        <LinkedInIcon fontSize='large' />
      </ModalTrigger>
      <ModalTrigger>
        <EmailIcon fontSize='large' />
      </ModalTrigger>
      <ModalTrigger>
        <GitHubIcon fontSize='large' />
      </ModalTrigger>
      <ModalTrigger>
        <CodeIcon fontSize='large' /> {/* Replace with a proper LeetCode icon if available */}
      </ModalTrigger>

      {/* LinkedIn Modal */}
      <Modal>
        <ModalBody>
          <ModalContent>
            <h2>LinkedIn</h2>
            <p>Visit my LinkedIn profile.</p>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              Go to LinkedIn
            </a>
          </ModalContent>
        </ModalBody>
      </Modal>

      {/* Email Modal */}
      <Modal>
        <ModalBody>
          <ModalContent>
            <h2>Email</h2>
            <p>You can email me at: your.email@example.com</p>
          </ModalContent>
        </ModalBody>
      </Modal>

      {/* GitHub Modal */}
      <Modal>
        <ModalBody>
          <ModalContent>
            <h2>GitHub</h2>
            <p>Check out my projects on GitHub.</p>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              Go to GitHub
            </a>
          </ModalContent>
        </ModalBody>
      </Modal>

      {/* LeetCode Modal */}
      <Modal>
        <ModalBody>
          <ModalContent>
            <h2>LeetCode</h2>
            <p>View my coding challenges on LeetCode.</p>
            <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer">
              Go to LeetCode
            </a>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ConnectWithMeBox;
