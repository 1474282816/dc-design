// a标签按钮组件
import { LoadingOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import React, { ReactNode } from 'react';

export type LinkButtonProps = {
  /**
   * 是否加载中
   */
  loading?: boolean;
  /**
   * 按钮内容
   */
  children?: ReactNode;
  /**
   * 是否隐藏
   */
  hidden?: boolean;
  /**
   * 是否是危险按钮
   */
  danger?: boolean;
  /**
   * 是否需要确认
   */
  confirm?: boolean;
  /**
   * 	确认框的描述
   */
  confirmTitle?: ReactNode | (() => ReactNode);
  /**
   * 	确认按钮文字
   */
  okText?: string;
  /**
   * 	取消按钮文字
   */
  cancelText?: string;
  /**
   * 按钮点击事件
   */
  onClick?: () => void;
  /**
   * 确认的回调
   */
  onConfirm?: () => void;
  /**
   * 取消的回调
   */
  onCancel?: () => void;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const {
    loading = false,
    children,
    onClick = () => {},
    hidden = false,
    confirm = false,
    onConfirm = () => {},
    confirmTitle = '确认删除?',
    danger = false,
    okText,
    cancelText,
    onCancel,
  } = props;
  return (
    <>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <>
          {!hidden &&
            (confirm ? (
              <Popconfirm
                title={confirmTitle}
                onConfirm={onConfirm}
                onCancel={onCancel}
                okText={okText}
                cancelText={cancelText}
              >
                <a style={{ color: danger ? 'red' : 'unset' }}>{children}</a>
              </Popconfirm>
            ) : (
              <a style={{ color: danger ? 'red' : 'unset' }} onClick={onClick}>
                {children}
              </a>
            ))}
        </>
      )}
    </>
  );
};
export default LinkButton;
