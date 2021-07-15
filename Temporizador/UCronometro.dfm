object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 408
  ClientWidth = 697
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object label_minutos: TLabel
    Left = 32
    Top = 120
    Width = 26
    Height = 58
    Caption = '0'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -48
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object label_doisp: TLabel
    Left = 64
    Top = 120
    Width = 17
    Height = 58
    Caption = ':'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -48
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object label_segundos: TLabel
    Left = 81
    Top = 120
    Width = 26
    Height = 58
    Caption = '0'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -48
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object SpeedButton1: TSpeedButton
    Left = 35
    Top = 192
    Width = 72
    Height = 30
    Caption = 'Iniciar'
    OnClick = SpeedButton1Click
  end
  object LabelTeste: TLabel
    Left = 328
    Top = 112
    Width = 3
    Height = 13
  end
  object MediaPlayer1: TMediaPlayer
    Left = 113
    Top = 192
    Width = 57
    Height = 30
    EnabledButtons = [btPlay, btPause]
    VisibleButtons = [btPlay, btPause]
    DoubleBuffered = True
    ParentDoubleBuffered = False
    TabOrder = 0
  end
  object Timer: TTimer
    Enabled = False
    Interval = 100
    OnTimer = TimerTimer
    Left = 664
    Top = 8
  end
end
