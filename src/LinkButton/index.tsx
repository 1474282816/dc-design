// a标签按钮组件
import { LoadingOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import React, { ReactNode } from 'react';

export type LinkButtonProps = {
  /**
   * @description 是否加载中
   * @default false
   */
  loading?: boolean;
  /**
   * @description 按钮内容
   */
  children?: ReactNode;
  /**
   * @description 是否隐藏
   * @default false
   */
  hidden?: boolean;
  /**
   * @description 是否是危险按钮
   * @default false
   */
  danger?: boolean;
  /**
   * @description 是否需要确认
   * @default false
   */
  confirm?: boolean;
  /**
   * @description 确认框的描述
   */
  confirmTitle?: ReactNode | (() => ReactNode);
  /**
   * @description 确认按钮文字
   * @default "确定"
   */
  okText?: string;
  /**
   * @description 取消按钮文字
   * @default "取消"
   */
  cancelText?: string;
  /**
   * @description 按钮点击事件
   */
  onClick?: () => void;
  /**
   * @description 确认的回调
   */
  onConfirm?: () => void;
  /**
   * @description 取消的回调
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
                <a style={{ color: danger ? 'red' : undefined }}>{children}</a>
              </Popconfirm>
            ) : (
              <a
                style={{ color: danger ? 'red' : undefined }}
                onClick={onClick}
              >
                {children}
              </a>
            ))}
        </>
      )}
    </>
  );
};
export default LinkButton;
