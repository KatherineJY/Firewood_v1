import React, { Component } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import styles from './style';

const DATA = [
    {
        id: 1,
        name: '站长',
        des: '人员接纳/人员清退/授权管理/发布活动/以组织名义回复/处理组织信息',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 2,
        name: '部门负责人',
        des: '人员接纳/人员清退/授权管理/以组织名义回复/处理组织信息',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
    {
        id: 3,
        name: '部门成员',
        des: '人员接纳/人员清退/以组织名义回复',
        ava: 'https://avatars3.githubusercontent.com/u/13383310?s=96&v=4',
    },
];
class CommunityAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderItem = (item) => {
        console.log(item.des.split('/'));
        return (
            <View style={styles.orgWrapper}>
                <View style={styles.orgList}>
                    {/*<View style={styles.orgHeader}>
                        <Image
                            resizeMode='stretch'
                            style={{ width: 40, height: 40, }}
                            source={{ uri: item.ava }}
                        />
                    </View>*/}
                    <View style={styles.orgSection}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('OneUser')}
                        >
                            <Text style={styles.orgName}>
                                {item.name}
                            </Text>
                            {
                                item.des.split('/').map(permission => (
                                    <Text style={styles.orgDes}>
                                        {permission}
                                    </Text>
                                ))
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.orgBehavior}>
                        <TouchableOpacity
                            onPress={() => alert('删除')}
                        >
                            <Icon name="md-close" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => alert('修改')}
                        >
                            <Icon name="md-settings" size={25} style={{marginTop: 20}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={styles.title}>已有权限</Text>
                        <Icon name="md-add" size={20} />
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem}
                    />
                </View>
            </ScrollView>
        );
    }
}

export default connect()(CommunityAll)