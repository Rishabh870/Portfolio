import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineProject, AiOutlineContacts } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi2';
import { RiServiceLine } from 'react-icons/ri';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  border-radius: 50px;
  max-width: 460px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
`;
export const Navigation = () => {
  return (
    <Navbar>
      <Nav className="mx-auto">
        <Container>
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-60 h-60 d-flex align-items-center justify-content-center "
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            <BiHomeAlt2 />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            className="cursor-pointer w-60 h-60 d-flex align-items-center justify-content-center"
          >
            <HiOutlineUser />
          </Link>
          <Link
            to="service"
            activeClass="active"
            smooth={true}
            spy={true}
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            className="cursor-pointer w-60 h-60 d-flex align-items-center justify-content-center"
          >
            <RiServiceLine />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            className="cursor-pointer w-60 h-60 d-flex align-items-center justify-content-center"
          >
            <AiOutlineProject />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            className="cursor-pointer w-60 h-60 d-flex align-items-center justify-content-center"
          >
            <AiOutlineContacts />
          </Link>
        </Container>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
