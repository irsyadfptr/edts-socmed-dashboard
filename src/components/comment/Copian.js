import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
    Button,
    ButtonGroup,
    Text,
    FormControl,
    Textfield,
    Switch,
    Icon,
    Segment,
    CheckBox
} from "@elevenia/master-ui/components/Atom"
import DataTable from 'component/DataTable';
import ModalDelete from 'component/ModalCustom/modalSmall'
import ModalAddCategory from 'component/ModalCustom/modalSmall'
import { useSingleToggle } from 'hooks';
import { useParams } from 'react-router-dom';
const TableState = (props) => {
    const moment = require('moment');
    const getPath = props.match.url;
    const { id } = useParams()
    const [open, setOpen] = useSingleToggle(false);
    const [openCategory, setOpenCategory] = useSingleToggle(false);
    const [data, setData] = useState(props.data.newItems);
    const [passId, setPassId] = useState(0)
    useEffect(() => {
        setData(props.data.newItems)
    }, [props.data.newItems])
    return (
        <>
            {
                props.setFrom === "detail" &&
                <DataTable
                    isShadow={true}
                    isWrapperShadow={true}
                    countingList={false}
                    tableConsume={[{
                        field: 'Promo ID',
                        rowField: 'promoId'
                    }, {
                        field: 'i-Kupon Name',
                        isCustomRow: (id, entity) => {
                            return (
                                <Link to={`/ikupon-master/${entity?.couponMasterId}`} target={"_blank"}>{entity?.name}</Link>
                            )
                        }
                    }, {
                        field: 'i-Kupon Period',
                        isCustomRow: (id, entity) => {
                            return (
                                <Text>
                                    {moment(entity.startDate).format('D MMM YYYY')} - {moment(entity.endDate).format('D MMM YYYY')}
                                </Text>
                            )
                        }
                    }, {
                        field: 'Poin to Exchange',
                        isCustomRow: (id, entity) => {
                            return (
                                <Text>{entity.amount}</Text>
                            )
                        }
                    }, {
                        field: 'Limit Exchange per Period',
                        isCustomRow: (id, entity) => {
                            return (
                                <Text>{entity.maxExchange}</Text>
                            )
                        }
                    }, {
                        field: 'Status',
                        isCustomRow: (id, entity) => {
                            return (
                                <Text>{entity.isActive ? "Active" : "Inactive"}</Text>
                            )
                        }
                    }]}
                    dataConsume={props.data.newItems}
                    showSize={false}
                    showSearch={false}
                    showTotal={true}
                    totalValue={props.data.newItems.length}
                />
            }
            {
                props.setFrom === "action" &&
                <DataTable
                    countingList={false}
                    tableConsume={[{
                        field: 'Promo ID',
                        rowField: 'promoId'
                    }, {
                        field: 'i-Kupon Name',
                        isCustomRow: (id, entity) => {
                            return (
                                <Text>
                                    {entity.name || entity.couponName}
                                </Text>
                            )
                        }
                    }, {
                        field: 'i-Kupon Period',
                        isCustomRow: (id, entity) => {
                            return (
                                <Text>
                                    {moment(entity.startDate).format('D MMM YYYY')} - {moment(entity.endDate).format('D MMM YYYY')}
                                </Text>
                            )
                        }
                    }, {
                        field: 'Poin to Exchange',
                        isCustomRow: (id, entity) => {
                            return (
                                <FormControl style={{ width: 120 }}>
                                    <Textfield
                                        inputProps={{
                                            ...props.bindChange,
                                            name: "poin" + entity.couponMasterId,
                                            className: "validate[required,number]",
                                            placeholder: "Input",
                                            autoFocus: true,
                                            autoComplete: "off",
                                            value: props.data["poin" + entity.couponMasterId] || ""
                                        }}
                                    />
                                </FormControl>
                            )
                        }
                    }, {
                        field: 'Limit Exchange per Period',
                        isCustomRow: (id, entity) => {
                            return (
                                <FormControl style={{ width: 120 }}>
                                    <Textfield
                                        inputProps={{
                                            ...props.bindChange,
                                            name: "limit" + entity.couponMasterId,
                                            className: "validate[required,number]",
                                            placeholder: "Input",
                                            autoFocus: true,
                                            autoComplete: "off",
                                            value: props.data["limit" + entity.couponMasterId] || ""
                                        }}
                                    />
                                </FormControl>
                            )
                        }
                    }, {
                        field: 'Category',
                        isCustomRow: (id, entity) => {
                            return (
                                <>
                                    {
                                        id === undefined &&
                                        <button style= {{cursor: 'pointer'}} onClick={() => {setOpenCategory(!openCategory)}}>
                                            <Segment display="flex" flexDirection="row" border="1px solid #1178D4" borderRadius={4} py={11} alignItems="center" width={130}>
                                                <Text color="#434755" fontWeight={400} mx={8}>Add Category</Text>
                                                <Icon name="plus" size="small" fillColor="#1178D4" mx={8} />
                                            </Segment>
                                        </button>
                                        // <Button type="button" size="medium" variant="secondary" onClick={() => {
                                        //     setOpenCategory(!openCategory)}}>
                                        //     <Text color="#434755" fontWeight={400}>1 Category</Text>
                                        //     <Icon name="plus" size="small" fillColor="#1178D4" ml={21} />
                                        // </Button>

                                    }
                                    {
                                        id !== undefined &&
                                        <Switch
                                            name="active"
                                            onChange={() => props.switchActivated(entity, entity.couponMasterId)}
                                            checked={entity.isActive}
                                            label={entity.isActive ? "Active" : "Inactive"} labelPosition={"right"} />
                                    }
                                </>
                            )
                        }
                    }, {
                        field: (getPath.split('/')[3] || getPath.split('/')[2] === 'create') && 'Action',
                        isCustomRow: (as, entity) => {
                            return (
                                <>
                                    {
                                        id === undefined &&
                                        <button style= {{cursor: 'pointer'}} type='button' onClick={() => {
                                        setPassId(entity.id)
                                        setOpen(!open)}}>
                                            <Text B14 color='primary' fontWeight={400}>Remove</Text>
                                        </button>
                                        // <Button type="button" size="medium" onClick={() => {
                                        //     setPassId(entity.id)
                                        //     setOpen(!open)
                                        // }} minWidth={40}>
                                        //     Delete
                                        // </Button>
                                    }
                                    {
                                        id !== undefined &&
                                        <Switch
                                            name="active"
                                            onChange={() => props.switchActivated(entity, entity.couponMasterId)}
                                            checked={entity.isActive}
                                            label={entity.isActive ? "Active" : "Inactive"} labelPosition={"right"} />
                                    }
                                </>
                            )
                        }
                    }]}
                    dataConsume={props.data.newItems}
                    showSize={false}
                    showSearch={false}
                    showTotal={true}
                    totalValue={props.data.newItems.length}
                />
            }
            <ModalDelete
                isOpen={open}
                onClose={() => setOpen(!open)}
                title={"Delete Coupon"}
                content={(
                    <>
                        Are you sure to delete this coupon?
                    </>
                )}
                ButtonFooter={
                    (
                        <ButtonGroup>
                            <Button type="button" minWidth={"100px"} variant={"secondary"} onClick={() => { setOpen(!open) }}>
                                Cancel
                            </Button>
                            <Button type="button" minWidth={"100px"} onClick={() => {
                                const removes = data.filter(item => item.id !== passId)
                                props.removePromoList(removes, passId)
                                setOpen(!open)
                            }}>
                                Confirm
                            </Button>
                        </ButtonGroup>
                    )
                }
            />

            <ModalAddCategory
                isOpen={openCategory}
                onClose={() => setOpen(!openCategory)}
                content={(
                    <>
                        <Segment p={'0 30px 30px 30px'} mb={46}>
                            <Text H16 textAlign={'center'}>Add Category</Text>
                        </Segment>
                        <Segment mb={16}>
                            <Text color={'#70727D'} fontWeight={500}>3 Items Selected</Text>
                        </Segment>
                        <Segment bg={"white"} borderRadius={4}>
                            <Segment mb={24}>
                                <DataTable
                                    countingList={false}
                                    tableConsume={[{
                                        field: 'Select',
                                        isCustomRow: (id, entity) => {
                                            return (
                                                <CheckBox/>
                                            )
                                        }
                                    }, {
                                        field: 'Category Name',
                                        isCustomRow: (id, entity) => {
                                            return (
                                                <Text>Category Name</Text>
                                            )
                                        },
                                    }]}
                                    isShadow={false}
                                />
                            </Segment>
                            <Segment flex={1} justifyContent={'flex-end'}>
                                <ButtonGroup>
                                    <Button minWidth={"100px"} variant={"secondary"} onClick={() => { setOpenCategory(!openCategory) }}>
                                        Cancel
                                    </Button>
                                    <Button minWidth={"100px"}>
                                        Confirm
                                    </Button>
                                </ButtonGroup>
                            </Segment>
                        </Segment>
                    </>
                )}
            />
        </>

    )
}

export default TableState