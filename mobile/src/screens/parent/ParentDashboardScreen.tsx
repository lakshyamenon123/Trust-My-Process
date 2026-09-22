import type { ReactNode } from 'react'
import { ScrollView, Text, View, Pressable, StyleSheet } from 'react-native'
import { ChevronRight } from 'lucide-react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import Card from '../../components/Card'
import IconBadge from '../../components/IconBadge'
import LevelBar from '../../components/LevelBar'
import { studentProfile, interests, strengths, skills, careers, progress } from '../../data/studentData'
import { colors, fonts } from '../../theme'
import type { RootStackParamList, ParentTabParamList } from '../../navigation/types'

type Props = CompositeScreenProps<
  BottomTabScreenProps<ParentTabParamList, 'Dashboard'>,
  NativeStackScreenProps<RootStackParamList>
>

export default function ParentDashboardScreen({ navigation }: Props) {
  return (
    <ScrollView style={{ backgroundColor: colors.bgSoft }} contentContainerStyle={styles.scroll}>
      <Card style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{studentProfile.initials}</Text>
        </View>
        <View style={styles.profileBody}>
          <Text style={styles.profileName}>{studentProfile.name}</Text>
          <Text style={styles.profileGrade}>{studentProfile.grade} · Overall progress {progress.overall}%</Text>
        </View>
      </Card>

      <Section
        title="Interests"
        actionLabel="View all"
        onAction={() => navigation.navigate('InterestsList')}
      >
        {interests.slice(0, 3).map((item) => (
          <Pressable key={item.id} onPress={() => navigation.navigate('InterestDetail', { id: item.id })}>
            <View style={styles.previewRow}>
              <IconBadge icon={item.icon} size={38} />
              <View style={styles.previewBody}>
                <Text style={styles.previewTitle}>{item.title}</Text>
                <LevelBar value={item.level} />
              </View>
            </View>
          </Pressable>
        ))}
      </Section>

      <Section
        title="Strengths"
        actionLabel="View all"
        onAction={() => navigation.navigate('StrengthsList')}
      >
        {strengths.map((item) => (
          <Pressable key={item.id} onPress={() => navigation.navigate('StrengthDetail', { id: item.id })}>
            <View style={styles.previewRow}>
              <IconBadge icon={item.icon} size={38} color={colors.accent} />
              <View style={styles.previewBody}>
                <Text style={styles.previewTitle}>{item.subject}</Text>
                <LevelBar value={item.level} color={colors.accent} />
              </View>
            </View>
          </Pressable>
        ))}
      </Section>

      <Section
        title="Skills & talents"
        actionLabel="View all"
        onAction={() => navigation.navigate('SkillsList')}
      >
        {skills.slice(0, 3).map((item) => (
          <Pressable key={item.id} onPress={() => navigation.navigate('SkillDetail', { id: item.id })}>
            <View style={styles.previewRow}>
              <IconBadge icon={item.icon} size={38} color={colors.highlight} />
              <View style={styles.previewBody}>
                <Text style={styles.previewTitle}>{item.name}</Text>
                <LevelBar value={item.level} color={colors.highlight} />
              </View>
            </View>
          </Pressable>
        ))}
      </Section>

      <Section
        title="Career interests"
        actionLabel="View all"
        onAction={() => navigation.navigate('CareersList')}
      >
        {careers.slice(0, 2).map((item) => (
          <Pressable key={item.id} onPress={() => navigation.navigate('CareerDetail', { id: item.id })}>
            <View style={styles.previewRow}>
              <IconBadge icon={item.icon} size={38} color={colors.primaryDeep} />
              <View style={styles.previewBody}>
                <Text style={styles.previewTitle}>{item.title}</Text>
                <Text style={styles.previewSubtitle}>{item.matchPct}% match · {item.salaryRange}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </Section>
    </ScrollView>
  )
}

function Section({
  title,
  actionLabel,
  onAction,
  children,
}: {
  title: string
  actionLabel: string
  onAction: () => void
  children: ReactNode
}) {
  return (
    <Card>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Pressable style={styles.sectionAction} onPress={onAction}>
          <Text style={styles.sectionActionText}>{actionLabel}</Text>
          <ChevronRight size={14} color={colors.primary} />
        </Pressable>
      </View>
      <View style={styles.previewList}>{children}</View>
    </Card>
  )
}

const styles = StyleSheet.create({
  scroll: { padding: 16, gap: 12 },
  profileCard: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  avatar: {
    width: 52, height: 52, borderRadius: 26,
    backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center',
  },
  avatarText: { fontFamily: fonts.displaySemibold, fontSize: 16, color: colors.white },
  profileBody: { flex: 1, gap: 2 },
  profileName: { fontFamily: fonts.display, fontSize: 16, color: colors.ink },
  profileGrade: { fontFamily: fonts.body, fontSize: 12.5, color: colors.muted },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  sectionTitle: { fontFamily: fonts.displaySemibold, fontSize: 14, color: colors.ink },
  sectionAction: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  sectionActionText: { fontFamily: fonts.bodyMedium, fontSize: 12.5, color: colors.primary },
  previewList: { gap: 14 },
  previewRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  previewBody: { flex: 1, gap: 6 },
  previewTitle: { fontFamily: fonts.bodySemibold, fontSize: 13.5, color: colors.ink },
  previewSubtitle: { fontFamily: fonts.body, fontSize: 12, color: colors.muted },
})
