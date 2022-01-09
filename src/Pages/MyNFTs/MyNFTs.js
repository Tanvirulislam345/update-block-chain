import React from 'react';
import { Container } from 'react-bootstrap';
import InnerNavigation from '../Shared/InnerNavigation/InnerNavigation';
import SideNavitation from '../Shared/SideNavitation/SideNavitation';
import CreateNFT from './CreateNFT/CreateNFT';
import ShowNFT from './ShowNFT/ShowNFT';

const MyNFTs = () => {
    return (
        <div className='App' style={{ backgroundColor: '#F7F7F9' }}>
            <InnerNavigation></InnerNavigation>
            <Container className='d-flex'>
                <SideNavitation></SideNavitation>
                <ShowNFT></ShowNFT>
            </Container>

            <CreateNFT></CreateNFT>
        </div>
    );
};

export default MyNFTs;