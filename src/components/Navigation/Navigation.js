/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import { ReactComponent as ProfileIcon } from 'assets/svgs/profile.svg'
import { ReactComponent as EducationIcon } from 'assets/svgs/education.svg'
import { ReactComponent as SkillsIcon } from 'assets/svgs/skills.svg'
import './Navigation.css'
import { useHistory, useLocation } from "react-router-dom";

function Navigation(props) {
    const history = useHistory();
    const location = useLocation();
    const [active, setActive] = useState("#me")
    

    useEffect(() => {
        if (!location.hash) history.push(active)
        else if (location.hash && active!==location.hash) setActive(location.hash)
    }, [])
    

    return (
        <Nav className="flex-column position-fixed min-vh-100" onSelect={href=>setActive(href)} justify activeKey={active} as="ul">
            <Nav.Item as="li">
                <Nav.Link href="#me">
                    <ProfileIcon />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="#education">
                    <EducationIcon />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="#skills">
                    <SkillsIcon />
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

Navigation.propTypes = {

}

export default Navigation

